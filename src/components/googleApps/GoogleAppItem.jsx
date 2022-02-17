import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function GoogleAppItem({app: {title,id,name, icon}}) {
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={icon} alt="Google App avatar"/>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{title}</h2>
                    <h3 className="text-base-content text-opacity-80">{name}</h3>
                    <Link className='text-base-content text-opacity-40' to={`/app/${id}`}>Visit App</Link>
                </div>
            </div>

        </div>
    )
}

GoogleAppItem.propTypes = {
    app: PropTypes.object.isRequired
}

export default GoogleAppItem