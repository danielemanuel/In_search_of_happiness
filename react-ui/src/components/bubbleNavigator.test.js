

describe('BubbleNavigator',function() {

  beforeEach(function(){
    var fixture = '<div id="BubbleNavigator"> <svg width="1000" height="650"><a id="Information Technology" href="/companies/Information Technology"><circle id="Information TechnologyCircle" r="85" cx="433.7387780733562" cy="539.4409970328319" fill="teal"></circle><text x="433.7387780733562" y="539.4409970328319" text-anchor="middle">Information Technology</text></a></svg></div>';

    document.body.insertAdjacentHTML(
         'afterbegin',
         fixture);
  });

  it('expexts the right result ',function() {
    expect(1+1).to.equal(2);
  });
});
   // describe('BubbleNavigator', () => {
//   let bubbleNavigator = null;
//
//   beforeEach(() => {
//     bubbleNavigator = shallow(
//       <BubbleNavigator />
//     );
//   });
//
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<BubbleNavigator />, div);
//   });



  // it('has svg section', () => {
  //   expect(bubbleNavigator.find('svg').html()).toContain('<svg width=\"1000\" height=\"650\">');
  // });
  //
  // it('displays media industry', () => {
  //   expect(bubbleNavigator.find('#Media').html()).toContain('<text>Media</text>');
  // });
  //
  // it('displays media industry as an 80r circle with a fill', () => {
  //   expect(bubbleNavigator.find('#Media').html()).toContain('<circle r=\"80\" fill=\"');
  // });
  //
  // // it('media item renders media companies on click', () => {
  // //     expect(bubbleNavigator.)
  //
  // it('tests if the media industry circle moves', () => {
  //   const mediaCirclePosition = bubbleNavigator.find('#Media').html();
  //   expect(mediaCirclePosition).not.toEqual(bubbleNavigator.find('#Media').html());
  // });
// });
