set :stages, %w{snc1 lup1 staging uat}

$LOAD_PATH.unshift File.join(File.dirname(__FILE__), 'deploy')

require 'capistrano/ext/multistage'
require 'capistrano-deploytags'
require 'new_relic/recipes'
require 'localconfig'

set :application, 'PROJECT_NAME'
set :repository,  "git@github:comm-eng/#{application}.git"

set :scm, :git
set :deploy_via, :remote_cache
set :deploy_to, "/var/groupon/apps/#{application}"
set :branch, 'master'

set :user, 'commeng_deploy'
set :use_sudo, false

set :shared_children, %w{}

default_run_options[:pty] = true
ssh_options[:forward_agent] = true

after "deploy:update", "newrelic:notice_deployment"




# ######################################################################################################################
# COMPOSER CONTROLS

namespace :composer do
  task :update, :except => { :no_release => true } do
    run "sudo /usr/local/bin/composer.phar self-update"
    run "cd #{release_path} && composer.phar install --no-dev"
  end

  desc "[internal] Computes composer directory paths and registers them in Capistrano environment"
  task :register_dirs do
    set :composer_dirs, %w(vendor)
    set :shared_children, fetch(:shared_children) + fetch(:composer_dirs)
  end

  after "deploy:finalize_update", "composer:update"

  on :start, :except => [:staging, :production, :uat] do
    register_dirs
  end
end



# ######################################################################################################################
# DEPLOY CONTROLS

namespace :deploy do
  task :finalize_update, :except => { :no_release => true } do
    run "chmod -R g+w #{latest_release}" if fetch(:group_writable, true)
    run <<-CMD
      rm -rf #{latest_release}/webroot/system #{latest_release}/data &&
      mkdir -p #{latest_release}/data
    CMD

    shared_children.map do |d|
      run "ln -s #{shared_path}/#{d.split('/').last} #{latest_release}/#{d}"
    end
  end

  desc <<-DESC
    Restarts PHP-FPM
  DESC
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "sudo /usr/local/etc/init.d/php-fpm restart"
  end

  desc <<-DESC
    Starts PHP-FPM
  DESC
  task :start, :roles => :app do
    restart
  end

  desc <<-DESC
    Stops PHP-FPM
  DESC
  task :stop, :roles => :app do
    run "sudo /usr/local/etc/init.d/php-fpm stop"
  end
end



# ######################################################################################################################
# MISCELLANEOUS

desc "Return the server name(s)"
task :uname do
  run 'uname -a'
end
