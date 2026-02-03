/* eslint-disable no-undef */
const ColorBox = ({ colors, setColors }) => {
    return (
        <main
            style={{ backgroundColor: colors }}
            className='color-box'
        ><p>{colors ? colors : 'Empty Value'}</p>
        </main>

    )
}

export default ColorBox
