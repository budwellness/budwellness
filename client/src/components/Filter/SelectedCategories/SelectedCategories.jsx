/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectedCategories.module.scss';
import { addFilterTagAction } from '../../../store/filter/filter.slice';

const { log } = console;

function SelectedCategories() {
    const [filterTagsArr, setFilterTagsArr] = useState([]);
    const { filterTags } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const removeTagHandler = (key) => {
        const updatedFilterTags = { ...filterTags };
        updatedFilterTags[key] = '';
        setFilterTagsArr(
            Object.entries(updatedFilterTags).map((tag, index) => {
                if (tag[1] !== '') {
                    return (
                        <li key={index}>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={(e) => {
                                    log(e.target)
                                    testHandler()
                                }}
                            >
                                {tag[1]} <span className={styles.cross}>&times;</span>
                            </button>
                        </li>
                    )
                }
            })
        )
        dispatch(addFilterTagAction({ [key]: '' }))
    }
    useEffect(() => {
        return setFilterTagsArr(
            Object.entries(filterTags).map((tag, index) => {
                if (tag[1] !== '') {
                    return (
                        <li key={index}>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={() => removeTagHandler(tag[0])}
                            >
                                {tag[1]} <span className={styles.cross}>&times;</span>
                            </button>
                        </li>
                    )
                }
            })
        )

    }, [filterTags])

    return (
        <ul className={styles.selectedCategories}>
            {filterTagsArr}
        </ul>
    );
}

export default SelectedCategories;
