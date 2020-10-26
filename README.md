# Zoid Demo

This is a simpley demonstration of using [Zoid](https://github.com/krakenjs/zoid) to orchestrate communication between a "host" application and 2 cross-domain third-party apps.

The `src` directory is organized as follows:

- `src/host` represents a customer web site that would use our widgets
- `src/button` represents and embeddable button that a user would click on in order to initiate interaction with our main app (here called checkout).
- `src/checkout` represents our main embeddable app (e.g. something like paypal or stripe checkout).
- `src/shared` has some common Zoid components that would be needed by both the host site and the embeddable applications (button and checkout).

The webpack build creates 3 different html files with their respective javascript and css bundles.
