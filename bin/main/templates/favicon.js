function favicon(){
    const shortcutIicon = document.createElement('link');
    shortcutIicon.rel = 'shortcut icon';
    shortcutIicon.type = 'image/x-icon';
    shortcutIicon.href = '/favicon.ico';
    document.head.appendChild(shortcutIicon);
    
    const iconIco = document.createElement('link');
    iconIco.rel = '/favicon.ico';
    iconIco.href = '/favicon.ico';
    iconIco.type = 'image/x-icon';
    document.head.appendChild(iconIco);
    
    const appleTouchIconSize57 = document.createElement('link');
    appleTouchIconSize57.rel = 'apple-touch-icon';
    appleTouchIconSize57.sizes = '57x57';
    appleTouchIconSize57.href = '/favicon/apple-icon-57x57.png';
    document.head.appendChild(appleTouchIconSize57);
    
    const appleTouchIconSize60 = document.createElement('link');
    appleTouchIconSize60.rel = 'apple-touch-icon';
    appleTouchIconSize60.sizes = '60x60';
    appleTouchIconSize60.href = '/favicon/apple-icon-60x60.png';
    document.head.appendChild(appleTouchIconSize60);
    
    const appleTouchIconSize72 = document.createElement('link');
    appleTouchIconSize72.rel = 'apple-touch-icon';
    appleTouchIconSize72.sizes = '72x72';
    appleTouchIconSize72.href = '/favicon/apple-icon-72x72.png';
    document.head.appendChild(appleTouchIconSize72);
    
    const appleTouchIconSize76 = document.createElement('link');
    appleTouchIconSize76.rel = 'apple-touch-icon';
    appleTouchIconSize76.sizes = '76x76';
    appleTouchIconSize76.href = '/favicon/apple-icon-76x76.png';
    document.head.appendChild(appleTouchIconSize76);
    
    const appleTouchIconSize114 = document.createElement('link');
    appleTouchIconSize114.rel = 'apple-touch-icon';
    appleTouchIconSize114.sizes = '114x114';
    appleTouchIconSize114.href = '/favicon/apple-icon-114x114.png';
    document.head.appendChild(appleTouchIconSize114);
    
    const appleTouchIconSize120 = document.createElement('link');
    appleTouchIconSize120.rel = 'apple-touch-icon';
    appleTouchIconSize120.sizes = '120x120';
    appleTouchIconSize120.href = '/favicon/apple-icon-120x120.png';
    document.head.appendChild(appleTouchIconSize120);
    
    const appleTouchIconSize144 = document.createElement('link');
    appleTouchIconSize144.rel = 'apple-touch-icon';
    appleTouchIconSize144.sizes = '144x144';
    appleTouchIconSize144.href = '/favicon/apple-icon-144x144.png';
    document.head.appendChild(appleTouchIconSize144);
    
    const appleTouchIconSize152 = document.createElement('link');
    appleTouchIconSize152.rel = 'apple-touch-icon';
    appleTouchIconSize152.sizes = '152x152';
    appleTouchIconSize152.href = '/favicon/apple-icon-152x152.png';
    document.head.appendChild(appleTouchIconSize152);
    
    const appleTouchIconSize180 = document.createElement('link');
    appleTouchIconSize180.rel = 'apple-touch-icon';
    appleTouchIconSize180.sizes = '180x180';
    appleTouchIconSize180.href = '/favicon/apple-icon-180x180.png';
    document.head.appendChild(appleTouchIconSize180);
    
    const iconSize192 = document.createElement('link');
    iconSize192.rel = 'icon';
    iconSize192.type = 'image/png';
    iconSize192.sizes = '192x192';
    iconSize192.href = '/favicon/android-icon-192x192.png';
    document.head.appendChild(iconSize192);

    const iconSize512 = document.createElement('link');
    iconSize512.rel = 'icon';
    iconSize512.type = 'image/png';
    iconSize512.sizes = '512x512';
    iconSize512.href = '/favicon/android-icon-512x512.png';
    document.head.appendChild(iconSize512);
    
    const iconSize32 = document.createElement('link');
    iconSize32.rel = 'icon';
    iconSize32.type = 'image/png';
    iconSize32.sizes = '32x32';
    iconSize32.href = '/favicon/favicon-32x32.png';
    document.head.appendChild(iconSize32);
    
    const iconSize96 = document.createElement('link');
    iconSize96.rel = 'icon';
    iconSize96.type = 'image/png';
    iconSize96.sizes = '96x96';
    iconSize96.href = '/favicon/favicon-96x96.png';
    document.head.appendChild(iconSize96);
    
    const iconSize16 = document.createElement('link');
    iconSize16.rel = 'icon';
    iconSize16.type = 'image/png';
    iconSize16.sizes = '16x16';
    iconSize16.href = '/favicon/favicon-16x16.png';
    document.head.appendChild(iconSize16);
    
    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '/favicon/manifest.json';
    document.head.appendChild(manifest);

    const maskIcon = document.createElement('link');
    maskIcon.rel = 'mask-icon';
    maskIcon.href = '/safari-pinned-tab.svg';
    maskIcon.color = '#5bbad5';
    document.head.appendChild(maskIcon);
    
    const msapplicationTileColor = document.createElement('meta');
    msapplicationTileColor.name = 'msapplication-TileColor';
    msapplicationTileColor.content = '#da532c';
    document.head.appendChild(msapplicationTileColor);
    
    const msapplicationTileImage = document.createElement('meta');
    msapplicationTileImage.name = 'msapplication-TileImage';
    msapplicationTileImage.content = '/favicon/ms-icon-144x144.png';
    document.head.appendChild(msapplicationTileImage);
    
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#ffffff';
    document.head.appendChild(themeColor);
}

favicon();


//link list for favicon
/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512"  href="/favicon/android-icon-512x512.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff"> */