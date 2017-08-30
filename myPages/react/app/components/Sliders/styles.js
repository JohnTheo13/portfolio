const H =  {
		position:'relative',
		top:'-12px',
		float:'right'
	}


const rangeStyle = value =>{
	let green = value*10
	return {
		backgroundImage: 'linear-gradient(to right,#95a520 0%,#95a520 '+ green+'%,#bebcab '+green+'%,#bebcab 100%)',
		width:'85%',
		float:'left'
	}
}

const inputSlide =  {
        marginBottom: '12px',
        width: '300px'
    }


const totalStyle = {
        marginTop: '30px',
        textAlign: 'center',
    }

const totalWrapper = total => {
    let green = total*10
    return {
        backgroundColor:'green',
        background:'linear-gradient(to top,#95a520 0%,#95a520  '+ green+'%,#c3a6a6 '+green+'%,#8c8989 100%)',
        height: '100px',
        width: '100px',
        textAlign:'center',
        borderRadius:'50%',
        margin:'auto',
    }
}

const H3= {
        color:'white',
        position:'relative',
        top:'34%'
    }
    
const textStyles= on =>{
	let left = on ? '20px' :'58px'
	return {
		position:'relative',
		top:'11px',
		color:'#FDFDFD',
		left
	}
}

export { textStyles, H, H3, inputSlide, rangeStyle, totalStyle, totalWrapper }

