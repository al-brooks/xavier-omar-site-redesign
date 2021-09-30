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
    genre VARCHAR(50) DEFAULT 'R&B/Soul',
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

INSERT INTO videos (title, video_url, youtube_embed_frame)
VALUES
('npr tinydesk','https://www.youtube.com/watch?v=zD9hyjbTuF0','<iframe width="560" height="315" src="https://www.youtube.com/embed/zD9hyjbTuF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
('Surf','https://www.youtube.com/watch?v=0EAvO4hLVow','<iframe width="560" height="315" src="https://www.youtube.com/embed/0EAvO4hLVow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
('All Our Time','https://www.youtube.com/watch?v=32Ldr4Nobsg','<iframe width="560" height="315" src="https://www.youtube.com/embed/32Ldr4Nobsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
('So Much More','https://www.youtube.com/watch?v=F6sfR8dQsV4','<iframe width="560" height="315" src="https://www.youtube.com/embed/F6sfR8dQsV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
('Just Get Here','https://www.youtube.com/watch?v=kEXgzmSL_HQ','<iframe width="560" height="315" src="https://www.youtube.com/embed/kEXgzmSL_HQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

CREATE TABLE merch (
	merch_id SERIAL PRIMARY KEY,
  	merch_name VARCHAR(200),
  	merch_type VARCHAR(30),
  	description TEXT,
  	price INTEGER,
  	front_pic TEXT,
  	back_pic TEXT
)

CREATE TABLE checkout (
	checkout_id SERIAL PRIMARY KEY,
  	merch_id INTEGER REFERENCES merch (merch_id),
  	date_purchased TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO merch (merch_name, merch_type, description, price, front_pic, back_pic)
VALUES
('if You Feel Hoodie - Bone','Hoodie','if You Feel design screen printed on 80/20 cotton/polyester blend','50','https://s9.limitedrun.com/images/1504214/Hoodie-Front.png','https://s9.limitedrun.com/images/1504213/Hoodie_back.png'),
('if You Feel Tee - Bay','T-Shirt','if You Feel design screen printed on 100% ring spun cotton','25','https://s9.limitedrun.com/images/1504215/Tee_front.png','https://s9.limitedrun.com/images/1504216/Tee_back.png'),
('if You Feel Long Sleeve', 'Long Sleeve Shirt','if You Feel design screen printed on 100% ring spun cotton','35','https://s9.limitedrun.com/images/1494703/IYF-Mocks-03.png','https://s9.limitedrun.com/images/1497848/LS_Back.png')