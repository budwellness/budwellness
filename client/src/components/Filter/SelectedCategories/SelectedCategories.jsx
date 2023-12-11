/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectedCategories.module.scss';
import { addFilterTagAction, setSearchParamAction, setStartPageAction } from '../../../store/filter/filter.slice';

const { log } = console;

function SelectedCategories(props) {
    const { formRef } = props
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
        formRef.current.reset();
        const filterDataArr = [];
        const updatedCategories = Object.entries(updatedFilterTags)
        // .filter(([key, value]) => value !== '')
        // .map()
        // log('OBJ', Object.entries(updatedCategories))
        for (let [key, value] of updatedCategories) {
            dispatch(addFilterTagAction({ [key]: value }))
            if (key === 'thc' || key === 'cbd') {
                filterDataArr.push(`${value}`);
                continue;
            }
            if (key === 'categories' && value === 'all') {
                continue;
            }
            filterDataArr.push(`${key}=${value}`);
        }
        // filterDataArr.push(`minPrice=${minPrice}&maxPrice=${maxPrice}`);
        log('filterDataArr', filterDataArr)
        const filterQueryString = filterDataArr.join('&');
        log('filterQueryString', filterQueryString)
        dispatch(setStartPageAction(1))
        dispatch(setSearchParamAction(`${filterQueryString}`))
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
