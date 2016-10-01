class WordProblem

  def initialize(question)
    @question = question
    @matched = @question.match(/.+(\s-?\d+).+(\s-?\d+)/)
    # @matched = @quseiton.match(What is (-?\d+) (plus|minus) (-?\d+) ((plus|minus) (-?\d+))?)
  end

  def answer
    if @question.scan(/plus/).length == 2

    elsif @question =~ /plus/
      add
    elsif @question =~ /minus/
      subtract
    end
  end

  def add
    @matched[1].to_i + @matched[2].to_i
  end

  def subtract
    @matched[1].to_i - @matched[2].to_i
  end

  def double_add
  end

end

w = WordProblem.new('What is 1 plus 1?')
p w.answer
