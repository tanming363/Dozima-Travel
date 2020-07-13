import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turkey',
  templateUrl: './turkey.component.html',
  styleUrls: ['./turkey.component.scss']
})
export class TurkeyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  attractions = [
    {
      title: 'Pamukkale',
      info: `Pamukkale (tur. Bawełniany zamek lub Bawełniana twierdza) –
      turecka miejscowość położona w dolinie Cürüksu (w starożytności 
      zwanej Doliną Lycos), około 18 km od Denizli.
      Słynie z wapiennych osadów powstałych na zboczu góry Cökelez.`,
      img: 'assets/img/pamukkale.jpg',
      link: 'https://pl.wikipedia.org/wiki/Pamukkale'
    },
    {
      title: 'Ayasofya',
      info: `Hagia Sophia (Ayasofya) muzeum w Stambule 
      (dawny Konstantynopol), w przeszłości świątynia 
      chrześcijańska, następnie meczet. Uważana za 
      najwspanialszy obiekt architektury i budownictwa
      pierwszego tysiąclecia naszej ery.`,
      img: 'assets/img/blue.jpg',
      link: 'https://pl.wikipedia.org/wiki/Hagia_Sophia'
    },
    {
      title: 'Kappadokía',
      info: `Kapadocja – kraina historyczna w środkowej Turcji i centralnej części Anatolii,
      znana przede wszystkim z charakterystycznych form tufowych, tworzących księżycowy krajobraz,
      oraz z domów i kościołów wykutych w tych wulkanicznych skałach.`,
      img: 'assets/img/kap.jpg',
      link: 'https://pl.wikipedia.org/wiki/Kapadocja'
    }
  ]
}
