const loadMore = document.querySelector('.load-more')
const loadLess = document.querySelector('.load-less')
const moreCard = document.querySelector('.more-card')
loadMore.addEventListener('click',() => {
    moreCard.style.height = moreCard.scrollHeight + 'px'
    moreCard.style.paddingBottom = "20px"
    loadMore.style.display = "none"
    loadLess.style.display = "inline-block"
})
loadLess.addEventListener('click',() => {
    moreCard.style.height = '0'
    moreCard.style.paddingBottom = "0"
    loadMore.style.display = "inline-block"
    loadLess.style.display = "none"
})
moreCard.addEventListener('transitionend', () => {
    if(moreCard.style.height === '0px'){
        moreCard.style.overflow = "hidden"
    }
    else{
        moreCard.style.overflow = "visible"
        
    }
})
