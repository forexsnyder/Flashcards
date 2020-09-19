class HighscoresController < ApplicationController
  before_action :set_highscore, only: [:show, :update, :destroy]

  # GET /highscores
  def index
    @highscores = Highscore.all

    render json: @highscores
  end

  # GET /highscores/1
  def show
    render json: @highscore
  end

  # POST /highscores
  def create
    @highscore = Highscore.new(highscore_params)

    if @highscore.save
      render json: @highscore, status: :created, location: @highscore
    else
      render json: @highscore.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /highscores/1
  def update
    if @highscore.update(highscore_params)
      render json: @highscore
    else
      render json: @highscore.errors, status: :unprocessable_entity
    end
  end

  # DELETE /highscores/1
  def destroy
    @highscore.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_highscore
      @highscore = Highscore.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def highscore_params
      params.require(:highscore).permit(:name, :highscore)
    end
end
