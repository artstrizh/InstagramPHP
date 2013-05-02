require 'digest/md5'
require 'yaml'

$basePath = 'src'

task :build => [
  :prepare, :lint, :composer, :phploc, :pdepend,
  :phpmd_ci, :phpcs_ci, :phpcpd, :phpdoc,
  :phpunit, :phpcb
]

desc 'Cleanup build artifacts'
task :clean do
  puts "clean:"
  rm_rf %w(build/api build/code-browser build/coverage build/logs build/pdepend)
end

desc 'Prepare for build'
task :prepare => :clean do
  puts "prepare:"
  mkdir_p %w(build/api build/code-browser build/coverage build/logs build/pdepend build/cache/phpdoc build/cache/pdepend build/cache/lint)
end

desc 'Runs composer.phar install'
task :composer do
  puts "composer:"
  system "composer.phar install --prefer-dist"
end

task :lint do
  puts "lint:"
  files = FileList['**/*.php', '**/*.phtml'].exclude(/^vendor/)
  dirty = Hash.new

  clean = File.exists?('build/cache/lint/lint_hash') ? YAML::load(File.open('build/cache/lint/lint_hash')) : Hash.new

  files.each do |f|
    unless clean.has_key? f
      dirty[f] = Digest::MD5.hexdigest(File.read(f))
    else
      digest = Digest::MD5.hexdigest(File.read(f))
      unless clean[f] == digest
        dirty[f] = digest
      end
    end
  end

  dirty.each do |file, hash|
    system "php -l #{file}"
    unless $?.exitstatus == 0
      fail "Lint failure"
    else
      clean[file] = hash
    end
  end

  File.open('build/cache/lint/lint_hash', 'w') {|f| f.write(clean.to_yaml) }
end

desc 'Measure project size using PHPLOC'
task :phploc do
  puts "phploc:"
  system "phploc --log-csv build/logs/phploc.csv #{$basePath}"
end

desc 'Calculate software metrics using PHP_Depend'
task :pdepend do
  puts "pdepend:"
  system "pdepend --jdepend-xml=build/logs/jdepend.xml --jdepend-chart=build/pdepend/dependencies.svg --overview-pyramid=build/pdepend/overview-pyramid.svg #{$basePath}"
end

desc 'Perform project mess detection using PHPMD and print human readable output. Intended for usage on the command line before committing.'
task :phpmd do
  system "phpmd #{$basePath} text build/phpmd.xml"
end

desc 'Perform project mess detection using PHPMD creating a log file for the continuous integration server'
task :phpmd_ci do
  puts "phpmd_ci:"
  system "phpmd #{$basePath} xml build/phpmd.xml --reportfile build/logs/pmd.xml"
end

desc 'Find coding standard violations using PHP_CodeSniffer and print human readable output. Intended for usage on the command line before committing.'
task :phpcs do
  system "phpcs --standard=build/phpcs.xml #{$basePath}"
end

desc 'Find coding standard violations using PHP_CodeSniffer creating a log file for the continuous integration server'
task :phpcs_ci do
  puts "phpcs_ci:"
  system "phpcs --report=checkstyle --report-file=build/logs/checkstyle.xml --standard=build/phpcs.xml #{$basePath}"
end

desc 'Find duplicate code using PHPCPD'
task :phpcpd do
  puts "phpcpd:"
  system "phpcpd --log-pmd build/logs/pmd-cpd.xml #{$basePath}"
end

desc 'Generate API documentation using phpDocumentor'
task :phpdoc do
  puts "phpdoc:"
  system "phpdoc"
end

desc 'Run unit tests with PHPUnit'
task :phpunit => :composer do
  puts "phpunit:"
  system "phpunit"
end

desc 'Aggregate tool output with PHP_CodeBrowser'
task :phpcb do
  puts "phpcb:"
  system "phpcb --log build/logs --source #{$basePath} --output build/code-browser -e *.phtml --ignore=src/public"
end
