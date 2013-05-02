<?php

// Set our error reporting
@ini_set('display_errors', true);
@error_reporting(E_ALL & ~E_DEPRECATED);

// Define our environment
defined('APP_ENV') || define('APP_ENV', 'test');
defined('PATH_PROJECT') || define('PATH_PROJECT', realpath(__DIR__ . '/../'));
defined('PATH_SRC') || define('PATH_SRC', PATH_PROJECT . '/src');
defined('APPLICATION_PATH') || define('APPLICATION_PATH', PATH_SRC . '/application');
defined('TEST_PATH') || define('TEST_PATH', realpath(__DIR__));

set_include_path(
    implode(
        PATH_SEPARATOR,
        array(
            realpath(__DIR__ . '/../lib/'),
            get_include_path(),
        )
    )
);

/** @var $loader \Composer\Autoload\ClassLoader */
$loader = require_once(realpath(__DIR__ . '/../vendor/autoload.php'));

// Run our test cases
//$loader->add('Namespace\\Tests', __DIR__);
