if ($_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
    $_SERVER['HTTPS'] = '1';

if (isset($_SERVER['HTTP_X_FORWARDED_HOST'])) {
    $_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];
}
