import times from 'lodash/times';
import './PhotoGallery.css';

const PhotoGallery = () => {
    return (
        <div className="photo-gallery">
            {times(5, Number).map(rowNum => (
                <div className="column">
                    {times(5, Number).map(colNum => (
                        <img
                            key={rowNum * 5 + colNum}
                            src={`${process.env.PUBLIC_URL}/photos/${rowNum * 5 + colNum}.jpg`}
                            alt="YALA Camp 2022"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;
