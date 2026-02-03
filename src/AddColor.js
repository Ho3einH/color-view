const AddColor = ({ colors, setColor, handleSubmit }) => {

    return (
        <form className='send-color' onSubmit={handleSubmit}>
            <input
                id="addColor"
                type="text"
                placeholder='Add Color Name'
                value={colors}
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
    )
}

export default AddColor
