const Loading = () => {
    return (
        <div>
            <button className="btn btn-success" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}

export default Loading
