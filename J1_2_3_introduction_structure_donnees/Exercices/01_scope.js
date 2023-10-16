let a = 1;

function calcul() {
// let == définit un symbole dans un scope on n peut pas accèder à ce symbole avant de lui avoir assigner une valeur 
  // let a = 2 + a;
  a = 2 + a ;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();