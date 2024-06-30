import Styles from './ButtonContainer.module.css'
const ButtonContainer = ({onButtonClick})=>{
  const buttonName=['C','1','2','+','3','4','*','5','6','/','7','8','=','9']
  return (
    <div className={Styles.buttonContainer}>
      {
        buttonName.map((buttonName)=>(
          <button className={Styles.button} onClick={()=>onButtonClick(buttonName)}>
            {buttonName}
            </button>


        ))

      }
       
        

    </div>

  )
}
export default ButtonContainer;