function presTwoController() {
  this.show = false;
  this.showBus = "one";
  this.showRecadrage = false;
  this.highlight = false;
  this.includerpres2 = '1';
  this.selectClass = "1";
  this.index = 0;
  this.active = 0;
  this.previewPos = 0;
  this.position = 0;
  this.answerLeParisien = false;
  this.image20Minutes = true;
  this.minion = false;
  this.marking = true;
    this.slides = [{
        image: 'hollande_small',
        title: 'France',
        icon: './assets/icon/conv_violet.png',
        color: 'violet'
    }, {
        image: 'cloneZone_small',
        title: 'Exercice: CloneZone',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'chien_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'lascars_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'djibouti_small',
        title: 'Exercice: Légendage',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'carroussel_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'vancouver_Photo_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'tefal_Femme_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'radeau_meduse_small',
        title: 'Exercice: Recadrage',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'carte_small',
        title: 'France',
        icon: './assets/icon/conv_orange.png',
        color: 'orang'
    }, {
        image: 'e_penser',
        title: 'Vidéo',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'hetm',
        title: 'Publicité',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu'
    }, {
        image: 'picMonkey',
        title: 'Exercice: Pic Monkey',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: 'graph_small',
        title: 'International',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu',
    }, {
        image: 'enquete_opignion',
        title: 'Exercice: La fabrique à chiffres',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu'
    }, {
        image: 'vraidufaux_small',
        title: 'L\'ours',
        icon: './assets/icon/news_blue.png',
        color: 'bleu'
  }, {
      image: 'debat_foot_small',
      title: 'Débat',
      icon: './assets/icon/news_blue.png',
      color: 'bleu'
  }, {
      image: 'press_small',
      title: 'Presse',
      icon: './assets/icon/news_blue.png',
      color: 'bleu'
  }, {
      image: 'conclusion_small',
      title: 'Conclusion',
      icon: './assets/icon/vrai_faux.png',
      color: 'bleu'
  }];

    // Start offunction for animation true or false
    const getElement = (id) => {
        return angular.element(document.querySelector(id));
    };
    this.biggerTrueAnswer = (n) => {
        if (getElement('#true_answer' + n)[0].className == 'choice' || getElement('#true_answer' + n)[0].className == 'choice_twitter') {
            getElement('#true_answer' + n).addClass('bigger');
            getElement('#false_answer' + n).removeClass('bigger');
        } else {
            getElement('#true_answer' + n).removeClass('bigger');
        }
    };
    this.biggerFalseAnswer = (n) => {
        if (getElement('#false_answer' + n)[0].className == 'choice' || getElement('#false_answer' + n)[0].className == 'choice_twitter') {
            getElement('#false_answer' + n).addClass('bigger');
            getElement('#true_answer' + n).removeClass('bigger');
        } else {
            getElement('#false_answer' + n).removeClass('bigger');
        }
    };
    // End fo function for animation true or false

    // next function for navigate inside navigation slide
    this.next = () => {
        var posOne = angular.element(document.querySelector('.pos1'))[0].id;
        posOne = Number(posOne.substr(1, 2));
        if (this.index < this.slides.length - 4) {
            if (this.index + 4 == this.active) {
                angular.element(document.querySelector('#b' + this.active)).addClass('active');
            }
            this.position = this.position + 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index++;
        }
    };

    // preview function for navigate inside navigation slide
    this.preview = () => {
        if (this.index > 0) {
            if (angular.element(document.querySelector('#b' + (this.index + 3)))[0].className == "active") {
                this.active = this.index + 3;
                angular.element(document.querySelector('#b' + this.active)).removeClass('active');
            }
            this.position = this.position - 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index--;
        }
    };

    // select function for show indicator under the picture
    this.select = (i) => {
        angular.element(document.querySelector('#b' + i)).addClass('active');
        angular.element(document.querySelector('#b' + this.previewPos)).removeClass('active');
        this.active = i;
        this.previewPos = i;
        this.selectClass = Math.floor(Math.random() * (4 - 1) + 1);
        // console.log(this.selectClass);
        this.includerpres2 = i + 1;
    };

    // function for move to the next slide
    this.nextVisibleSlide = (i) => {
      if (i == 27) { this.showBus = "one"; }
        this.select(i);
        this.next();
    };

    //flip-flop controller
    this.flip = () => {
        if (!getElement('#front').hasClass('on-left')) {
            getElement('#front').addClass('on-left');
            getElement('#inner-left').addClass('on-left');
            getElement('#inner-right').addClass('on-right');
            getElement('#logo_minion').removeClass('contractedUp');
            getElement('#logo_minion').addClass('expandDown');
            this.minion = true;
            this.marking = false;
        } else {
            getElement('#logo_minion').removeClass('expandDown');
            getElement('#logo_minion').addClass('contractedUp');
            getElement('#front').removeClass('on-left');
            getElement('#inner-left').removeClass('on-left');
            getElement('#inner-right').removeClass('on-right');
            this.minion = false;
            this.marking = true;
        }
    };
}
