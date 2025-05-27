import "./App.css";
import TestForm from "./TestForm"
import PaperForm from "./PaperForm";
import { useState, useEffect } from "react";
import Form from "./Form";
import {calculateAverageSafely, calculateFinalAverage, filterList} from "./AverageUtil";
function changeButtonText(btn, text) {
  btn.innerText=text;
}
function App(props)
   {
    const extraCreditData = props.extraCreditData;
    const [extraCreditAmount, setExtraCreditAmount] = useState(extraCreditData[0].number);
    //console.log(extraCreditAmount);
  const [testForms, setTestForms] = useState(props.testForms);
  let testIndex = 1;
  const [testValueList, setTestValueList] = useState();
  useEffect(()=>{
    setTestValueList(["","",""]);
}, []);
  
  const testFormList = testForms.map((test) => {
    let testForm=<TestForm 
    id={test.id}
    key={test.id}
    testIndex={testIndex-1}
    inputPrompt={"Πόσο πήρες στο "+ testIndex + "ο τεστ;"}
    trackValue={(value, index)=>{setTestValueList(testValueList.map((grade,gradeIndex)=>{if(gradeIndex===index){ return value;}  return grade;})); /*console.log(testValueList)*/}}
    ></TestForm>
    testIndex++;
    return testForm;
  });
  const [paperValueList, setPaperValueList] = useState();
  useEffect(()=>{
    setPaperValueList(["","","", "", "", "", ""]);
}, []);

  const [paperForms, setPaperForms] = useState(props.paperForms);
  let paperIndex = 1;
  const paperList = paperForms.map((paper) => {
    let paperForm=<PaperForm 
    id={paper.id}
    key={paper.id}
    paperIndex={paperIndex-1}
    inputPrompt={"Πόσο πήρες στο "+ paperIndex + "ο φυλλάδιο;"}
    trackValue={(value, index)=>{setPaperValueList(paperValueList.map((grade,gradeIndex)=>{if(gradeIndex===index){return value;}  return grade;}))}}
    ></PaperForm>
    paperIndex++;
    return paperForm;
  });
  const [testAverage, setTestAverage] = useState("");
  const [paperAverage, setPaperAverage] = useState("");
  

  const [examGrade, setExamGrade] = useState("");
  const [speechGrade, setSpeechGrade] = useState("");
  let examGradeForm = <Form id="exam-form" key="exam-form" inputPrompt="Πόσο πήρες στο διαγώνισμα;" trackValue={setExamGrade}></Form>;
  let speechGradeForm = <Form id="speech-form" key="speech-form" inputPrompt="Πόσο πιστεύεις πως τα πήγες στα προφορικά(συμμετοχή);" trackValue={setSpeechGrade}></Form>;

  let combobox = <select name="extraCreditAmount" id="extraCreditAmountCombobox" onChange={(e)=>{
    //console.log(e.target.value);
    setExtraCreditAmount(e.target.value);
  }}>
    
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
</select>;
const [isThisFirstRender, setNowFirstRender] = useState(true);
const [finalGrade, setFinalGrade] = useState();
const [isInFirstGrade, setInFirstGrade] = useState(false); 
let changeModeButton = <button className="modebtn" onClick={
  (e)=>{
    setInFirstGrade(!isInFirstGrade);
    let newText = e.target.innerText==="Είσαι στην πρώτη Γυμνασίου; Πάτα εδώ" ? "Δεν είσαι στην πρώτη Γυμνασίου; Πάτα εδώ" : "Είσαι στην πρώτη Γυμνασίου; Πάτα εδώ";
    changeButtonText(e.target, newText);
  }
}>{isInFirstGrade ? "Δεν είσαι στην πρώτη Γυμνασίου; Πάτα εδώ" : "Είσαι στην πρώτη Γυμνασίου; Πάτα εδώ"}</button>;
//changeButtonText(changeModeButton,isInFirstGrade ? "Δεν είσαι στην πρώτη Γυμνασίου; Πάτα εδώ" : "Είσαι στην πρώτη Γυμνασίου; Πάτα εδώ" );
let initialAskGrade = <h1 className="firstrender">Είσαι στην Α' Γυμνασίου;</h1>;
let initialYesButton = <button className="firstrender" onClick={
  (e)=>{
    setInFirstGrade(true);
    setNowFirstRender(false);
  }
}>ΝΑΙ</button>;
let initialNoButton = <button className="firstrender" onClick={
  (e)=>{
    setInFirstGrade(false);
    setNowFirstRender(false);
    
  }
}>ΟΧΙ</button>;
/*if(isThisFirstRender){
  console.log("test");
  return <div className="programma-upologismou">
    {initialAskGrade}
    {initialYesButton}
    {initialNoButton}
  </div>;
}*/
  return (
    <div className="programma-upologismou">
      <ul
        role="list"
        className="testList"
        aria-labelledby="list-heading">
        {changeModeButton}
        {!isInFirstGrade && testFormList}
        {!isInFirstGrade &&<button
          type="button"
          className="calculateTestAverage"
          onClick={()=>{setTestAverage(calculateAverageSafely(filterList(testValueList))); /*console.log((testValueList));*/ }}
          >
          Υπολόγισε ΤΜΟ <span className="visually-hidden">{props.name}</span>
        </button>}
        <p className="testAverage">{testAverage}</p>
        <h1 className="infoHeader">Πληροφορίες για την εφαρμογή</h1>
        <p className="info">Αυτή η ιστοσελίδα δημιουργήθηκε για να διευκολύνει  <br/>τον υπολογισμό βαθμού φυσικής για τους μαθητές του Γυμνάσιου  <br/>το 2025 από τον μαθητή του σχολείου Άγγελο. Είναι εντελώς δωρεάν<br/> και ανοιχτής <a href="https://github.com/gymzip-anepishmo/programmaupologismouba8moufusikhsweb">πηγής.</a><br/>Πιθανές ερωτήσεις και απαντήσεις: <br/>  Ε: Πως δουλεύει;<br/>Α:<br/>1. Παίρνει τον μέσο όρο των τεστ. <br/>2. Παίρνει τον μέσο όρο των φυλλαδίων. <br/>3.Προσθέτει τον μέσο όρο των τεστ, τον μέσο όρο των φυλλαδίων, <br/> τον βαθμό διαγωνίσματος και τον βαθμό συμμετοχής και τα διαιρεί με το 4. <br/>4. Προσθέτει 0.5 για κάθε extra credit που έκανες.<br/><br/>Ε: Έβαλα δεκαδικό αριθμό και λέει πως ένας βαθμός δεν είναι έγκυρος! Τι να <br/>κάνω; <br/>Α: Οι δεκαδικοί αριθμοί πρέπει να είναι με τέλεια όχι κόμμα.<br/>(π.χ. 15.4 όχι 15,4). <br/>Αυτό μάλλον είναι το πρόβλημα.<br/></p>
      </ul>
      <ul
        role="list"
        className="paperList"
        aria-labelledby="list-heading">
        {paperList}
        <button
          type="button"
          className="calculatePaperAverage"
          onClick={()=>{setPaperAverage(calculateAverageSafely(filterList(paperValueList)));/*console.log(filterList(paperValueList));*/}}
          >
          Υπολόγισε ΕΜΟ <span className="visually-hidden">{props.name}</span>
        </button>
        <p className="paperAverage">{paperAverage}</p>
        <button
          type="button"
          className="calculateFinalGrade"
          onClick={()=>{setFinalGrade(calculateFinalAverage(calculateAverageSafely(filterList(testValueList)),calculateAverageSafely(filterList(paperValueList)),examGrade, speechGrade, extraCreditAmount))}}
          >
          Υπολόγισε βαθμό τετραμήνου <span className="visually-hidden">{props.name}</span>
        </button>
        <p className="finalGrade">{finalGrade}</p>
      </ul>
      <ul
      role="list"
      className="misc"
      aria-labelledby="list-heading"
      >
        {examGradeForm}
        {speechGradeForm}
        {!isInFirstGrade &&<label htmlFor="extraCreditAmountCombobox">Πόσα extra credit έκανες;</label>}
        {!isInFirstGrade && combobox }
      </ul>
    </div>);
}

export default App;