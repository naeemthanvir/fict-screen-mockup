
function TitleAndText({title, text}) {
  return (
    <div>
        <p style={{
          marginTop: 0
        }}
        ><strong>{title}:</strong>
        </p>
        <p style={{
            color: "#3fae5d",
            marginTop: "-10px",
            textTransform: "capitalize",
            marginBottom: 0
        }}
        >{text}</p>
    </div>
  )
}

export default TitleAndText