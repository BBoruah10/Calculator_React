import styles from './Display.module.css'
const Display=({displayVal})=>{
  return (
    <input type='text' className={styles.display} readOnly value={displayVal}></input>

  );
}
export default Display