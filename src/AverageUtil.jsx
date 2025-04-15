function calculateAverage(numbers){
    if(numbers===undefined|| numbers.length === 0){
        return -1;
    }
    numbers=numbers.map((number)=>{;if(+number>=0&&+number<=20&&number!==''){return +number;} return "invalid";});
    if(numbers.includes("invalid")){
        return -1;
    }
    let sum = 0;
    let count = 0;
    numbers.forEach((number) => {
        sum+=number;
        count++;
    });
    return sum/count;
}

function calculateAverageSafely(numbers){
    const average  = calculateAverage(numbers);
    if(average!==-1){
        return average;
    }
    return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
}

function calculateFinalAverage(testAverage, paperAverage, examGrade, speechGrade, extraCreditAmount){
    //console.log(testAverage, "\n",paperAverage, "\n",examGrade, "\n",speechGrade, "\n",extraCreditAmount); 
    let sum = 0;
    let count = 0;
    if(+testAverage!==-1&&testAverage!=="Ένας από τους βαθμούς ήταν μη έγκυρος."){
        sum+=+testAverage;
        count++;
    } 
    if(+paperAverage!==-1&&paperAverage!=="Ένας από τους βαθμούς ήταν μη έγκυρος."){
        sum+=+paperAverage;
        count++;
    } 
    if(+examGrade>=0&&+examGrade<=20){
        sum+=+examGrade;
        count++;
    } 
    if(+speechGrade>=0&&+speechGrade<=20){
        sum+=+speechGrade;
        count++;
    } 
    if(!(+extraCreditAmount>=0&&+extraCreditAmount<=2)){
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
    }
    let integerSum = Math.round(sum/count+(+extraCreditAmount)*0.5);
    if(integerSum>=20){
        return 20;
    }
    return integerSum;
}

function filterList(grades){
    let gradesCopy = [];
    for(const grade of grades){
        if(grade!==""){
            gradesCopy.push(grade);
        }
    }
    return gradesCopy;
}

export {calculateAverage, calculateAverageSafely, calculateFinalAverage, filterList};