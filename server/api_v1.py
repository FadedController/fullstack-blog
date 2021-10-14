from flask import Blueprint, render_template, jsonify, request

views = Blueprint(__name__, 'views')


@views.route('/posts', methods=['GET'])
def get_posts():
    postname = request.args.get('postname')
    try:
        with open('static/posts/'+postname+'.md') as f:
            md = f.read()
            post = {
                "title": postname.replace('-', ' ').capitalize(),
                "markdown": md
            }
            return jsonify(post)
    except:
        return render_template('404.html')
