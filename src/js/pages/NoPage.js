export default function NoPage() {
    return (
        <>
            <div className={"no-page"}>
                <span className={'error-code'}>404 </span>
                <span id={'error-message'}>NO PAGE FOUND!</span>
                <br/>
                <img src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" alt="404 error"/>
            </div>
        </>
    )
}
