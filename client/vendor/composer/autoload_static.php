<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit43911e3862eb029499363d988c6a2551
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit43911e3862eb029499363d988c6a2551::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit43911e3862eb029499363d988c6a2551::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
