# DigitalCrafts Solo React Project

## App: Xavier Omär Personal Site Redesign

app link: https://xavier-omar-redesign.surge.sh/

## App Description:

This app serves as the personal brand website for an artist. In this case that artist is the R&B/Soul singer Xavier Omär - he's great, so you should definitely check out his music. It provides access to his album discography, latest music videos, merch, and the ability to sign up to join his team's mailing list.

#### Images Used For App:

- https://thissongissick.com/wp-content/uploads/2020/10/Xavier-Omar-scaled.jpg
- https://s9.limitedrun.com/images/1504214/Hoodie-Front.png
- https://s9.limitedrun.com/images/1504215/Tee_front.png
- https://s9.limitedrun.com/images/1494703/IYF-Mocks-03.png

## Motivation

I created this website based on my love for music. I think it's important for artists to have control over their art and be able to engage their fans on their own terms. I decided to move forward with designing an artist web page that would serve as a way to connect with true fans who support their music.

## Features

The Stripe api allows users to purchase Merch. Nodemailer provides an email functionality that takes user's emails and sends them a hello email upon submission. Users are able to view Xavier's discography, and latest videos.

## Site Screenshots:

### Large Screen Landing Page

<img width="1280" alt="large-screen-landing" src="https://user-images.githubusercontent.com/47277927/135782499-f2923924-8343-427e-9734-e88fdab094a7.png">

### Mobile Landing Page

<img width="308" alt="mobile-screen-landing" src="https://user-images.githubusercontent.com/47277927/135782510-b677b307-f45b-42b7-996e-570f46de6e1c.png">

### Merch Section

<img width="1037" alt="merch-section" src="https://user-images.githubusercontent.com/47277927/135782518-bb51ef96-bd2b-4f5d-b71e-7fd228753992.png">

### Stripe Checkout Page

<img width="1280" alt="stripe-checkout" src="https://user-images.githubusercontent.com/47277927/135782523-f6874651-b30c-483b-90c3-bdd5e6d822fd.png">

To test the checkout page, please use the below test cards (per stripe documentation)
NUMBER | DESCRIPTION
------------ | -------------
4242 4242 4242 4242 | Succeeds and processes payment
4000 0000 0000 3220 | Prompts for additional authentication (isn't required for test mode)
4000 0000 0000 9995 | Fails with message of **insufficient funds**

### Discography Section

<img width="942" alt="music-list-section" src="https://user-images.githubusercontent.com/47277927/135782537-b0daacfb-ed8a-4dfc-83e2-7d13bd88fe61.png">

### Video Section

<img width="984" alt="video-list-section" src="https://user-images.githubusercontent.com/47277927/135782544-d4a23212-0689-4ad6-876c-1698b8d7a2fa.png">

#### Front-End Technologies

- HTML
- CSS
- Sass
- JavaScript
- React
- Redux

#### Back-End Technologies / Dependencies

- Node.js
  - express
  - nodemailer
  - stripe
  - pg-promise

#### Database:

- Elephant SQL
- PostgreSQL
