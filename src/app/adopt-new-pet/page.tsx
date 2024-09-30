import Link from "next/link";
import styles from "../page.module.css";

export default function Page() {
    return (
        <div className={styles.page}>
            <h1>Adopt Pet Page</h1>

           <h2>What do you want to name your pet?</h2>
           {/* Input */}
           {/* create pet button/link to pet page */}
           <Link
            href="/pet"
           >
           <p>Adopt New Pet</p>
           </Link>
        </div>
    )
}