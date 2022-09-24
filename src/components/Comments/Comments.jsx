import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Comments({ activedata }) {
    const comments = activedata.comments;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addComment = (e) => {
        e.preventDefault();
        const input=document.getElementById('#comment');
        console.log(input);
        handleClickOpen();
    }

    return (
        <div className="ui comments flex flex-col items-center justify-around h-full overflow-auto max-h-[475px]">
            {
                comments.map(comment =>
                    <div className="comment max-w-[250px]" key={comment.comment}>
                        <a href='/#' className='avatar'>
                            <div className='w-12 h-12 rounded-[50%] bg-slate-700'>
                            </div>
                        </a>
                        <div className="content">
                            <a className="author !text-zinc-200 !text-xl" href='/#'>{comment.name}</a>
                            <div className="metadata">
                                <span className="date text-zinc-400">{comment.comment_time}</span>
                            </div>
                            <div className="text !text-white !text-2xl">
                                {comment.comment}
                            </div>
                        </div>
                    </div>
                )
            }
            <form className="ui reply form h-4">
                <button onClick={(e) => addComment(e)} >
                    <div className="ui !bg-slate-700 !text-white labeled submit icon button" >
                        <i className="icon edit"></i>
                        Add Comment
                    </div>
                </button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Comment</DialogTitle>
                    <DialogContent>
                        <DialogContentText className="!mr-40">
                        Write the comment you want to send
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="comment"
                            label="Comment.."
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Subscribe</Button>
                        <Button onClick={handleClose}>Send Comment</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    )
}

export default Comments