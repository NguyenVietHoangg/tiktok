import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import images from '~/asset/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Image = forwardRef(
    (
        { src, className, fallback: customFallback = images.noImage, ...props },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                ref={ref}
                className={classNames(styles.wrapper, className)}
                src={fallback || src}
                {...props}
                onError={handleError}
                alt="anh bi loi"
            />
        );
    },
);
Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
