import Image from "next/image";
import styles from "./page.module.css";
import newBorn from "../public/images/life-stages/born.png";
import baby from "../public/images/life-stages/baby.png";
import child from "../public/images/life-stages/child.png"
import teen from "../public/images/life-stages/teen.png"
import adultDog from "../public/images/life-stages/adult.png";


export default function Home() {
  let image = adultDog;
  const time = 0;
  if(time >=0 && time < 5) image = newBorn;
  else if(time >= 5 && time <10) image = baby;
  else if(time >= 10 && time <20) image = child;
  else if(time >= 20 && time <30) image = teen;
  else image = adultDog;

  return (
    <div className={styles.page}>
      <Image
        src={image}
        width={375}
        height={255}
        alt="adult-dog"
    />
      

    </div>
  );
}
