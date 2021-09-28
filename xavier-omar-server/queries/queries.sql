CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email TEXT UNIQUE
)

--  HOLDING OFF ON THE BELOW TABLES FOR NOW. IMPLEMENTATION MAY BE UNNECESSARY

CREATE TABLE music (
    music_id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    genre VARCHAR(50) DEFAULT 'R&B/Soul'
    apple_url TEXT,
    spotify_url TEXT,
    tidal_url TEXT,
    cover_art_url TEXT 
)

CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    image_url TEXT
)

INSERT INTO  music (title, apple_url, spotify_url, tidal_url, cover_art_url)
VALUES
('if You Feel', 'https://music.apple.com/us/album/if-you-feel/1534776511', 'https://open.spotify.com/album/3MbutmdmYVZkJet5KXtALG', 'https://tidal.com/browse/album/159273435','https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2020/10/ifyoufeel-cover-scaled.jpg'),
('Moments Spent Loving You', 'https://music.apple.com/us/album/moments-spent-loving-you/1484140449', 'https://open.spotify.com/album/2m8sIT1YP8YBQm2MAliBAH', 'https://tidal.com/browse/album/120749182', 'https://i2.wp.com/italmassive.com/wp-content/uploads/2019/11/1280x1280-2019-11-16T074207.637.jpg?fit=1280%2C1280&ssl=1'),
('The Everlasting Wave', 'https://music.apple.com/us/album/the-everlasting-wave/1437576687', 'https://open.spotify.com/album/6AcXp7TeRyCNbyeNJSEMIL', 'https://tidal.com/browse/album/95798740', 'http://images.genius.com/b33dccc55b1028a801e3a72ddbec48ea.1000x1000x1.jpg'),
('Hours Spent Loving You', 'https://music.apple.com/us/album/hours-spent-loving-you/1141028304', 'https://open.spotify.com/album/5gBmvBzVGoP96jbF4OfnKh', 'https://tidal.com/browse/album/63660659', 'https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaWhyLWluZ2VzdGlvbi1waXBlbGluZS1wcm9kdWN0aW9uLXR1bmVjb3JlLzg1OTcxNzk2MzM3MS84NTk3MTc5NjMzNzEuanBn?surrogate=1cOXl179JY-syhxYSCX6Q1ahJ9ekBKwf7UslJDIRMVUNFyA2ynPTKGeppHdrRJA_SieUHOzOSwkFQXo9Cso-cHwZzbYfY-u6LMZOG9NI4JYT66ADLNFjNPLeHoTM2g0YHmyfUfJE1j3BXzsnZ63CKkZKwBiiNjkDex4CwbtxBHnNBANBlXAsqJpqynQUGjkT0a19U2BIqJ818ywU1WtkZ0Fjg3rJgRdYIpYn23qgir4YzkJ1DERMAh_OQHCi3_pCMicVSVZyiepT7SPUDs0%3D')