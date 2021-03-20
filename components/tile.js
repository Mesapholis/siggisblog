import styles from '../styles/Tiles.module.css'

export default function Tile() {
    return (
        <div className={styles.square}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>Tile Title</h3>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description ONE Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum TWO</p>
            </div>
        </div>
    );
}