// create a real time search component 

var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        //  this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var programs = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            programs = programs.filter(function(x){
                return x.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                    <ul> 

                        { programs.map(function(x){
                            return <li>{x.name} <a href={x.url}>{x.url}</a></li>
                        }) }

                    </ul>

                </div>;

    }
});

                                                                                                                                                             
var programss = [

    { name: 'WAMP', url: 'http://wampserver.com/'},
    { name: 'MAMP', url: 'https://www.mamp.info/'},
    { name: 'XAMPP', url: 'https://www.apachefriends.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

// Render the SearchExample component on the page

ReactDOM.render(
    <SearchExample items={ programs } />,
    document.getElementById('container')
);