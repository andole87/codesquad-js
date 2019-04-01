(defvar name (read))

(defun hello-you (*name*)
	(format t "hello ~(~a~) ~%" *name*)
)

(hello-you name)