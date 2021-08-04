/* Author: 

*/


var mov_name, release_date, actor_name, producer_name;


var movie = [
{mov_name: 'A', release_date: new Date('01/03/2002'), actor_name: 'aaa', producer_name: 'AaA'},
{mov_name: 'B', release_date: new Date('02/04/2005'), actor_name: 'bbb', producer_name: 'BaB'},
{mov_name: 'C', release_date: new Date('03/01/2004'), actor_name: 'ccc', producer_name: 'CcC'},
{mov_name: 'D', release_date: new Date('06/03/2008'), actor_name: 'ddd', producer_name: 'DdD'},
{mov_name: 'E', release_date: new Date('04/10/2012'), actor_name: 'eee', producer_name: 'EeE'},
{mov_name: 'F', release_date: new Date('10/03/2011'), actor_name: 'fff', producer_name: 'FfF'},
{mov_name: 'G', release_date: new Date('11/09/2002'), actor_name: 'ggg', producer_name: 'GgG'},
{mov_name: 'I', release_date: new Date('17/07/2017'), actor_name: 'hhh', producer_name: 'HhH'},
{mov_name: 'J', release_date: new Date('05/05/2019'), actor_name: 'iii', producer_name: 'IiI'},
{mov_name: 'K', release_date: new Date('09/11/2020'), actor_name: 'jjj', producer_name: 'JjJ'}
]

var a = "";

for (var i = 0; i < movie.length; i++) 
{
   a = 'Movie name :' + movie[i].mov_name + " " + 'Release date :' + movie[i].release_date + " " + 'Actor name: ' + movie[i].actor_name +
    " " + 'Producer name: ' + movie[i].producer_name;
}
document.querySelector('ul').innerHTML = a;
console.log(a);

function search () {

    var ul = document.querySelector('#ul-section');
}






  






















