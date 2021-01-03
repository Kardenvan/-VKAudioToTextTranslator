function getParams()
{
    let getParamsString = document.location.search.substr(1);
    let getParamsArr = getParamsString.split('&');
    let getParamsObj = {};

    for (let i = 0; i < getParamsArr.length; i++) {
        let [key, value] = getParamsArr[i].split('=');

        getParamsObj[key] = value;
    }

    return getParamsObj;
}
