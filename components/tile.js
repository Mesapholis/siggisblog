import styles from '../styles/Tiles.module.css'

export default function Tile({ text, color }) {
    return (
        <p className={styles.title} style={{ color }}> { text}</p >
    )
}