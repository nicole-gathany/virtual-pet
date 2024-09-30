import Link from "next/link";
import styles from "../page.module.css";

export default function Page() {
    return (
        <div className={styles.className}>
            <h1>Your Pets</h1>
            {/* list of pets */}
            <h4>Want a new pet?</h4>
            {/* create new pet button */}
            <Link href="/adopt-new-pet">Adopt Pet</Link>
        </div>
    )
}