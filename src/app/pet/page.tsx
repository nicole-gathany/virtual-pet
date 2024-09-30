import Image from "next/image";
import styles from "../page.module.css";
import newBorn from "../../public/images/life-stages/born.png";
import baby from "../../public/images/life-stages/baby.png";
import child from "../../public/images/life-stages/child.png"
import teen from "../../public/images/life-stages/teen.png"
import adultDog from "../../public/images/life-stages/adult.png";

export default function Page() {
    let image = newBorn;
    let altTag = "new born dog";
    const time = 0;
    let width = 360;
    let height = 225;

    if(time >=0 && time < 5) {
        image = newBorn;
        altTag = "new born dog";
        width = 360;
        height = 225;
    }
    else if(time >= 5 && time <10) {
        image = baby;
        altTag = "puppy";
        width = 225;
        height = 240;
    }
    else if(time >= 10 && time <20) { 
        image = child;
        altTag = "kid dog" 
        width = 345;
        height = 240;
    }
    else if(time >= 20 && time <30) { 
        image = teen;
        altTag = "teen dog";
        width = 285;
        height = 255;
    }
    else {
        image = adultDog;
        altTag = "adult dog";
        width = 375;
        height = 255;
    }


    
    return (

        // needs pet name
    <div className={styles.page}>
        <h1>Pet Page</h1>
        <Image
        src={image}
        width={width}
        height={height}
        alt={altTag}
    />
    </div>
    
        

    )
}