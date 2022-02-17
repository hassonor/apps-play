import {useContext, useState} from 'react';
import GoogleAppsContext from "../../context/googleApps/GoogleAppsContext";
import AlertContext from "../../context/alert/AlertContext";

function GoogleAppsSearch() {
    const [text, setText] = useState('')
    const {apps, searchApps, fetchApps} = useContext(GoogleAppsContext);

    const {setAlert} = useContext(AlertContext);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert('Please insert valid and not empty text', 'error')

        } else {
            searchApps(text)

            setText('')
        }
    }

    return (<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="app-searcher w-full pr-40 bg-gray-200 input input-lg text-black"
                               placeholder="Search"
                               value={text}
                               onChange={handleChange}
                        />
                        <button
                            type='submit'
                            data-cy="find"
                            className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <button
                    onClick={fetchApps}
                    data-cy="btn-ghost"
                    className="btn btn-ghost btn-lg">
                    All Apps
                </button>
            </div>
        </div>


    </div>)
}

export default GoogleAppsSearch