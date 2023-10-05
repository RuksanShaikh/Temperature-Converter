const changefah = () => {
    const cdeg = document.getElementById("c").value;

    // F= (9/5*c)+32

    let fah = (9/5*cdeg)+32;

    console.log(fah);

    document.getElementById("f").value = fah;
  };

  const changeDeg = () => {
    const fv = document.getElementById("fd").value;

    // T = (fv- 32) × 5/9

    let newcv = ((fv - 32) * 5) / 9;

    console.log(newcv);

    document.getElementById("cd").value = newcv.toFixed(2) ;
  };