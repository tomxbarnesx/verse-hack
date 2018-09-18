class AlbumsController < ApplicationController
    def index
        fetcher = Lyricfy::Fetcher.new
        # @song = fetcher.search 'Kanye West', 'I Thought About Killing You'
        # @song2 = fetcher.search 'Kanye West', 'Yikes'
        # puts @song.body
        # puts @song2.body
    end
end
