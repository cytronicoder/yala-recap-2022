import times from 'lodash/times';
import './PhotoGallery.css';

const PhotoGallery = () => {
    // on click of an image, download it
    const downloadImage = (e) => {
        const a = document.createElement('a');
        a.href = e.target.src;
        a.download = `YALA Camp 2022 - ${e.target.src.split('/').pop()}`
        a.click();
    };
    
    return (
        <div className="photo-gallery">
            {times(5, Number).map(rowNum => (
                <div className="column" key={rowNum}>
                    {times(5, Number).map(colNum => (
                        <img
                            key={colNum}
                            src={`${process.env.PUBLIC_URL}/photos/${rowNum * 5 + colNum}.jpg`}
                            alt="YALA Camp 2022"
                            onClick={downloadImage}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;
