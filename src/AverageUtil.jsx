function calculateAverage(numbers){
    if(numbers===undefined|| numbers.length === 0){
        return -1;
    }
    numbers=numbers.map((number)=>{;if(+number>=0&&+number<=20&&number!==''){return +number;} return "invalid";});
    if(numbers.includes("invalid")){
        return -2;
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
    if(average!==-2){
        return average;
    }
    return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
}

function calculateFinalAverage(testAverage, paperAverage, examGrade, speechGrade, extraCreditAmount, isInFirstGrade){
    //console.log(testAverage, "\n",paperAverage, "\n",examGrade, "\n",speechGrade, "\n",extraCreditAmount); 
    let sum = 0;
    let count = 0;
    if(isInFirstGrade){
        testAverage=-1;
        extraCreditAmount=0;
    }
    if(+testAverage>=0&&testAverage!=="Ένας από τους βαθμούς ήταν μη έγκυρος."){
        console.log("tst avg");
        sum+=+testAverage;
        count++;
    } else if(+testAverage==-2 || testAverage==="Ένας από τους βαθμούς ήταν μη έγκυρος."){
        console.log(1);
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
    }
    if(+paperAverage>=0&&paperAverage!=="Ένας από τους βαθμούς ήταν μη έγκυρος."){
        sum+=+paperAverage;
        console.log("paper avg");
        count++;
    } else if(+paperAverage==-2 || paperAverage==="Ένας από τους βαθμούς ήταν μη έγκυρος."){
        console.log(2);
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
    }
    if(+examGrade>=0&&+examGrade<=20&&examGrade!==""){
        sum+=+examGrade;
        console.log("exam");
        count++;
    } else if(examGrade!==""){
        console.log(3);
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
    }
    if(+speechGrade>=0&&+speechGrade<=20&&speechGrade!==""){
        sum+=+speechGrade;
        console.log("speech");
        count++;
    } else if(speechGrade!==""){
        console.log(4);
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
    }
    if(!(+extraCreditAmount>=0&&+extraCreditAmount<=2)){
        console.log(5);
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
    }
    let integerSum=-100;
    if(count!==0){
        integerSum = Math.round(sum/count+(+extraCreditAmount)*0.5);
    } else{
        integerSum = Math.round((+extraCreditAmount)*0.5);
    }
    if(integerSum>=20){
        return 20;
    }
    if(isNaN(integerSum)){
        return "Ένας από τους βαθμούς ήταν μη έγκυρος.";
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