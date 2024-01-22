/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectedCategories.module.scss';
import { addFilterTagAction, setSearchParamAction, setStartPageAction } from '../../../store/filter/filter.slice';
import convertAbbreviationToQueryString from '../../../helpers/convertAbbreviationToQueryString';

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
        const updatedCategories = Object.entries(updatedFilterTags)
        const filterQueryString = Object.entries(updatedCategories)
            .filter(([key, value]) => {
                if (value[1] === 'all') {
                    return false;
                }
                return value[1] !== '';
            })
            .map(([key, value]) => {
                if (value[0] === 'thc' || value[0] === 'cbd') {
                    return convertAbbreviationToQueryString(`${value[0]}=${value[1]}`)
                }
                return `${value[0]}=${value[1]}`
            })
            .join('&');
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
