<?php
/**
 * Provides install hook functionality for the Groupon Toolstrap2 library for Composer.
 *
 * @author  Andrew Vaughan
 * @version 2013-04-19
 */

namespace Composer\Installer;

use Composer\Script\Event;
use Composer\Composer;


/**
 * Class ToolstrapInstaller
 *
 * @package Composer/Installer
 * @author  Andrew Vaughan
 * @version 2013-04-9
 */
class ToolstrapInstaller
{

    public static function postInstall(Event $event)
    {
        self::compileDependencies($event->getComposer());
        self::compileJavaScript($event->getComposer());
        echo "\n";
    }

    public static function postUpdate(Event $event)
    {
        self::compileDependencies($event->getComposer());
        self::compileJavaScript($event->getComposer());
        echo "\n";
    }


    protected static function compileDependencies(Composer $composer)
    {
        echo "\nCompiling Toolstrap2 Dependencies...";

        $basepath = realpath(__DIR__ . "/../../../public");
        $vendor = realpath(__DIR__ . "/../../../../" . $composer->getConfig()->get('vendor-dir'));


        // Create our directories
        @mkdir($basepath . "/images/", 0777, true);
        @mkdir($basepath . "/css/fonts/", 0777, true);
        @mkdir($basepath . "/js/", 0777, true);
        @mkdir($basepath . "/sass/lib/", 0777, true);


        // Copy our files from the vendor into their various homes
        copy($vendor . "/maparicio/Groupon-Icon-Font/fonts/Groupon.eot", $basepath . "/css/fonts/Groupon.eot");
        copy($vendor . "/maparicio/Groupon-Icon-Font/fonts/Groupon.svg", $basepath . "/css/fonts/Groupon.svg");
        copy($vendor . "/maparicio/Groupon-Icon-Font/fonts/Groupon.ttf", $basepath . "/css/fonts/Groupon.ttf");
        copy($vendor . "/maparicio/Groupon-Icon-Font/fonts/Groupon.woff", $basepath . "/css/fonts/Groupon.woff");

        copy($vendor . "/maparicio/toolstrap2/images/bg-body.png", $basepath . "/images/bg-body.png");
        copy($vendor . "/maparicio/toolstrap2/images/logo-g.png", $basepath . "/images/logo-g.png");
        copy($vendor . "/maparicio/toolstrap2/images/logo-g@2x.png", $basepath . "/images/logo-g@2x.png");

        copy($vendor . "/maparicio/Groupon-Icon-Font/style.css", $basepath . "/sass/lib/Groupon-Icon-Font.scss");


        echo "Done.\n";
    }

    protected static function compileJavaScript(Composer $composer)
    {
        echo "\nCompiling Toolstrap2 JavaScript...";

        $basepath = realpath(__DIR__ . "/../../../public");
        $vendor = realpath(__DIR__ . "/../../../../" . $composer->getConfig()->get('vendor-dir'));


        // Create our directories
        @mkdir($basepath . "/js/lib/", 0777, true);


        // Compile our JS
        $js = file_get_contents($vendor . "/maparicio/toolstrap2/javascripts/toolstrap.js") . "\n\n";

        file_put_contents($basepath . "/js/lib/toolstrap2.js", $js);


        // Compile our IE7 JS
        $js = file_get_contents($vendor . "/maparicio/Groupon-Icon-Font/lte-ie7.js") . "\n\n";
        $js .= file_get_contents($vendor . "/maparicio/toolstrap2/javascripts/lte-ie7.js") . "\n\n";

        file_put_contents($basepath . "/js/lib/toolstrap2-lte-ie7.js", $js);


        echo "Done.\n";
    }
}
