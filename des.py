# Extraer el array de strings del código ofuscado
a3_0x33a2 = [
    '&desktop=', 'children', '&color=', 'data', 'validatedEmbed', 'data-rendered',
    '2364FjvWkW', 'embedElement', 'frameId', 'https', '11711UtXJXK', '3620cjuMox',
    'publicToken', '/public/widgets/', 'casterfmWidgetIframe_', '195239UFAjpg',
    'data-theme', 'src', 'theme', '8waOwiR', 'casterfmWidgetsRescan',
    'https://www.caster.fm', 'onreadystatechange', 'toString', '6033805bQdiAf',
    'player/', 'podcastsPlayer', 'iframe', 'href', '4ipZGiU',
    'Radio Server Hosting', 'push', 'null', '://', 'player/recordings/',
    'defineProperty', 'casterfmWidgets', 'setAttribute', 'appendChild',
    'indexOf', 'Error: No channel id attribute', 'desktop', 'type', 'data-type',
    'getAttribute', 'source', 'postMessage', 'innerHTML', '2515632qjhOwk',
    'complete', 'parentNode', '2520159TBJHEI', 'createElement', 'random',
    'message', 'WebpackRequireFrom: \'jsChunksUrl\' is not a string or not available at runtime.',
    'getElementById', '127026AvgdHO', 'newStreamPlayer', 'data-desktop',
    '&frameId=', 'playerIframeLoaded', 'streamPlayer', '100%', 'addEventListener',
    'data-channelId', 'Shoutcast Hosting', 'loading', 'Loading Player..',
    '&theme=', 'height', '1521914WFCHMv', 'readyState', 'widgets.cloud.caster.fm',
    'width', 'style', 'length', '?token=', 'origin', 'cstrEmbed', 'true', 'string',
    'color', 'data-publicToken', 'border', 'channelId', 'data-color', 'onload'
]

def desofuscar(index):
    """ Simula la función de mapeo a3_0x4ddc() """
    return a3_0x33a2[index - 0x182]

# Ejemplo de uso: Convertir un índice en su valor real
print(desofuscar(0x1ac))  # Debería devolver una cadena significativa
