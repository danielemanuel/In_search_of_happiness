describe('BubbleNavigator',function() {

  var bubbleNavigator;
  beforeEach(function(){
    var fixture = '<div id="BubbleNavigator"> <svg width="1000" height="650"><a id="Information Technology" href="/companies/Information Technology"><circle id="Information TechnologyCircle" r="85" cx="433.7387780733562" cy="539.4409970328319" fill="teal"></circle><text x="433.7387780733562" y="539.4409970328319" text-anchor="middle">Information Technology</text></a></svg></div>';

    document.body.insertAdjacentHTML(
         'afterbegin',
         fixture);
    bubbleNavigator = document.getElementById('BubbleNavigator').innerHTML;
  });

  it('contains svg', function() {
    expect(bubbleNavigator).to.include('<svg');
  });

  it('contains a circle',function() {
    expect(bubbleNavigator).to.include('<circle');
  });

  it('contains text',function() {
    expect(bubbleNavigator).to.include('<text');
  });

});
