import React from 'react'

const TotalMessage = props => {
    if (props>=9){
        return "perfect"
    } else if (props>=7){
        return "nice"
    } else if (props>=5){
        return "decent"
    } else if (props>=3){
        return "bad"
    } else {
        return "very bad"
    }
}

export default TotalMessage