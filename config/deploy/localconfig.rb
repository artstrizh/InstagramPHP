unless Capistrano::Configuration.respond_to?(:instance)
  abort "This extension requires Capistrano 2"
end

Capistrano::Configuration.instance.load do

  namespace :deploy do

    namespace :config do

      desc <<-DESC
        Creates our deployment-rendered files per server.

        When this recipe is loaded, config:setup is automatically configured \
        to be invoked after deploy:setup. You can skip this task setting \
        the variable :skip_config_setup to true. This is especially useful \
        if you are using this recipe in combination with \
        capistrano-ext/multistaging to avoid multiple config:setup calls \
        when running deploy:setup for all stages one by one.
      DESC
      task :setup, :except => { :no_release => true } do

        run "mkdir -p #{shared_path}/config"


        #
        # heartbeat.txt
        #
        run "echo $CAPISTRANO:HOST$ > #{shared_path}/config/heartbeat.txt"


      end

      desc <<-DESC
        [internal] Updates the symlink for shared files to the just deployed release.
      DESC
      task :symlink, :except => { :no_release => true } do
        run "ln -nfs #{shared_path}/config/heartbeat.txt #{release_path}/src/public/heartbeat.txt"
      end

    end

    after "deploy:setup",           "deploy:config:setup"   unless fetch(:skip_config_setup, false)
    after "deploy:finalize_update", "deploy:config:symlink"

  end

end